import React from "react";
import PropTypes from "prop-types";
import { animated, useSpring } from "@react-spring/web";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextInput from "../../components/Input/TextInput";
import SelectInput from "../../components/Input/SelectInput";
import MultilineTextInput from "../../components/Input/MultilineTextInput";
import DateInput from "../../components/Input/DateInput";
import FormButton from "../../components/Buttons/FormButton";
import DeleteButton from "../../components/Buttons/DeleteButton";
import { validatePayload } from "../../utils/sharedFunctions";

const PRIORITY = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

const STATUS = [
  {
    label: "To-do",
    value: "TODO",
  },
  {
    label: "In Progress",
    value: "in-progress",
  },
  {
    label: "Done",
    value: "done",
  },
];

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    // @ts-expect-error https://github.com/pmndrs/react-spring/issues/2341
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function TodoForm({
  title,
  loading,
  input,
  open,
  openTask,
  handleInput,
  handleSubmit,
  handleUpdate,
  handleDelete,
  handleClose,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style} borderRadius={2}>
          <div className="pb-4 flex items-center justify-between">
            <Typography id="spring-modal-title" variant="h6" component="h2">
              {openTask ? "Edit" : "Add"} Task
            </Typography>
            {openTask && input.status === "TODO" ? (
              <DeleteButton handleClick={handleDelete} />
            ) : null}
          </div>

          <div className="my-4">
            <TextInput
              id={"title"}
              label={"Task Title"}
              placeholder={"Enter the task title"}
              input={input.title}
              handleInput={handleInput}
              required={true}
              disabled={loading}
            />
            <MultilineTextInput
              id={"description"}
              label={"Task Description"}
              placeholder={"Enter the task description"}
              input={input.description}
              handleInput={handleInput}
              required={true}
              disabled={loading}
            />
            <DateInput
              id={"deadline"}
              label={"Task Deadline"}
              input={input.deadline}
              handleInput={handleInput}
              disabled={loading}
            />
            {openTask ? (
              <SelectInput
                id={"status"}
                label={"Task Status"}
                selectArray={STATUS}
                input={input.status}
                handleInput={handleInput}
                disabled={loading}
              />
            ) : null}

            <SelectInput
              id={"priority"}
              label={"Task Priority"}
              selectArray={PRIORITY}
              input={input.priority}
              handleInput={handleInput}
              disabled={loading}
            />
            {openTask ? (
              <FormButton
                label={"Edit"}
                loading={loading}
                action={handleUpdate}
                disabled={!validatePayload(input)}
              />
            ) : (
              <FormButton
                label={"Create"}
                loading={loading}
                action={handleSubmit}
                disabled={false}
              />
            )}
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
