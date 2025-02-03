import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  formatDate,
  isDeadlinePassed,
  priorityColor,
} from "../../utils/sharedFunctions";

export default function TodoItem({ data, handleOpenTask }) {
  return (
    <Card
      variant="outlined"
      className="mb-2"
      onClick={() => handleOpenTask(data)}
      sx={{ cursor: "pointer" }}
    >
      <Box sx={{ p: 2, paddingBottom: 0 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography fontSize={14}>{data.title}</Typography>
            <Typography fontSize={12}>{formatDate(data.deadline)}</Typography>
          </div>
          <div>
            <Chip
              color={priorityColor(data.priority)}
              label={data.priority}
              size="small"
            />
            {isDeadlinePassed(data.deadline) ? (
              <Chip
                className="ml-2"
                color={"error"}
                label={"overdue"}
                size="small"
              />
            ) : null}
          </div>
        </Stack>
      </Box>
      <CardContent>
        <Typography fontSize={14}>{data.description}</Typography>
      </CardContent>
    </Card>
  );
}
