import React, { useState } from "react";
import { PrimaryButton } from "../Map/map.style";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setClearCart } from "redux/slices/cart";
import GuestCheckoutModal from "../cards/GuestCheckoutModal";
import dynamic from "next/dynamic";
const AuthModal = dynamic(() => import("components/auth/AuthModal"));
const CartActions = (props) => {
  const { setSideDrawerOpen, cartList, text } = props;
  const { configData } = useSelector((state) => state.configData);
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [modalFor, setModalFor] = useState("sign-in");
  const theme = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRoute = () => {
    router.push("/checkout?page=cart", undefined, { shallow: true });
  };
  const handleCheckout = () => {
    if (
      cartList?.length > 0 &&
      !token &&
      configData?.guest_checkout_status === 1
    ) {
      setOpen(true);
    } else if (cartList?.length > 0 && token) {
      router.push("/checkout?page=cart", undefined, { shallow: true });
      setSideDrawerOpen(false);
    } else {
      if (cartList?.length === 0) {
        setSideDrawerOpen(false);
        router.push("/home", undefined, { shallow: true });
      } else {
        setOpenAuth(true);
        // setSideDrawerOpen(false);
        //router.push('/auth/sign-in');
      }
    }
  };
  // const handleCheckout = () => {
  //   if (cartList?.length > 0) {
  //     router.push("/checkout?page=cart", undefined, { shallow: true });
  //     setSideDrawerOpen(false);
  //   } else {
  //     if (router.pathname === "/home") {
  //       setSideDrawerOpen(false);
  //     } else {
  //       router.push("/home", undefined, { shallow: true });
  //     }
  //   }
  // };
  const handleClearAll = () => {
    dispatch(setClearCart());
    // dispatch(setCouponInfo(null));
    // setOpenModal(false);
  };
  return (
    <Stack
      direction="row"
      width="100%"
      spacing={1}
      paddingX="1.25rem"
      pb="1rem"
    >
      <PrimaryButton
        onClick={handleCheckout}
        variant="contained"
        size="large"
        fullWidth
        borderRadius="7px"
      >
        {text ? (
          text
        ) : (
          <>
            {cartList?.length > 0
              ? t("Proceed To Checkout")
              : t("Continue Shopping")}
          </>
        )}
      </PrimaryButton>
      {open && (
        <GuestCheckoutModal
          open={open}
          setOpen={setOpen}
          setSideDrawerOpen={setSideDrawerOpen}
          handleRoute={handleRoute}
          setModalFor={setModalFor}
          setOpenAuth={setOpenAuth}
        />
      )}
      <AuthModal
        modalFor={modalFor}
        setModalFor={setModalFor}
        open={openAuth}
        handleClose={() => setOpenAuth(false)}
      />
    </Stack>
  );
};

CartActions.propTypes = {};

export default CartActions;
