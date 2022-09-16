import { Box, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import api from "../api";

import Hoteles from "../components/Hoteles/Hoteles";
import Layout from "../components/Layout/Layout";
import Slogan from "../components/Slogan/Slogan";

const Home: NextPage = ({ hotels }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("/api/nav").then((res) => setList(res.data));
  }, []);

  return (
    <Layout list={list}>
      <Slogan />
      <Hoteles hotels={hotels}></Hoteles>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const hotels = await api.homeData();

  return { props: { hotels } };
};
