import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { size } from "@material-tailwind/react/types/components/avatar";

export interface DialogComponentProps {
  displayButton: any;
  size?: size;
  title?: string;
  formatterContent?: any;
  closeText?: string;
  accessText?: string;
}

export default function DialogComponent(props: DialogComponentProps) {
  const {
    displayButton,
    size,
    title,
    formatterContent,
    closeText,
    accessText,
  } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <div onClick={handleOpen}>{displayButton}</div>
      <Dialog open={open} handler={handleOpen} size={size ? size : "md"}>
        {title ? <DialogHeader>{title}</DialogHeader> : null}
        <DialogBody divider>{formatterContent}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>{closeText ? closeText : "Cancel"}</span>
          </Button>
          {accessText ? (
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>{accessText}</span>
            </Button>
          ) : null}
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
