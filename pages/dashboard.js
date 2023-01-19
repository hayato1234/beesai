import { getCookie, removeCookies } from "cookies-next";
import React from "react";
import connect from "../lib/dbConnect";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { useRouter } from "next/router";

function DashBoard({ email }) {
  const router = useRouter();
  const logout = () => {
    removeCookies("token");
    router.replace("/");
  };
  // console.log()
  return (
    <div>
      <h2>{email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    await connect();
    const token = getCookie("token", { req, res });
    // if (!token) return { redirect: { destination: "/" } };
    const verified = await jwt.verify(token, process.env.SECRET_KEY);
    const obj = await User.findOne({ _id: verified.id });
    if (!obj) return { redirect: { destination: "/" } };
    return {
      props: {
        email: obj.email,
      },
    };
  } catch (err) {
    console.log(err);
    removeCookies("token", { req, res });
    return { redirect: { destination: "/" } };
  }
}

export default DashBoard;
