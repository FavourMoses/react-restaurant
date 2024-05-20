import * as React from "react";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";
import "./menu.css";

// import { Cart } from "./defaultmenu";
// import Cart from "../../src/components/Newmenu";
// import Nav from "../components/nav/nav";
import { CartDetails } from "./defaultmenu";
import { Card } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const storedCart = localStorage.getItem("cart");
  // console.log(cartArray)
  const cartArray = storedCart ? JSON.parse(storedCart) : [];

  const CartItems = Object.keys(cartArray).map((key) => cartArray[key]);

  // const cart = []; // Your cart state
  // const reducedCart = () => {};

  return (
    <div className="myModal">
      {/* {open && <Nav />} */}
      <Button onClick={handleOpen}></Button>
      {open && (
        <div className="md">
          <div className="md2">
            {close && (
              <div>
                <IoMdClose onClick={handleClose} />
              </div>
            )}
            <CartDetails/>
            {/* {CartItems.map((cartItems) => (
              <CartDetails key={cartItems.id} CartItems={cartItems} />
            ))} */}
          </div>
        </div>
      )}
      {/* <Modal
        // style={{ background: "blue" }}
        sx={style}
        // open={open}
        // className="myModal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClick={handleOpen} id="myModal">
          thvykigb
          {CartItems.map((CartItems) => (
            <CartDetails key={CartItems.id} CartItems={CartItems} />
          ))}
          <IoMdClose onClose={handleClose} />
          <div>
            {/* {CartItems.map((CartItems) => (
              <CartDetails key={CartItems.id} CartItems={CartItems} />
            ))} */}
      {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
      {/* </div> */}
      {/* //   </Box>
      // </Modal>  */}
    </div>
  );
}
