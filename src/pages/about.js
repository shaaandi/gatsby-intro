import React from 'react';
import{Link} from "gatsby"
import Layout from "../components/layout";

export default function about() {
  return (
    <Layout>
      <h1>Abouut me</h1>
      <Link to="/">&larr; Back to home</Link>
    </Layout>
  );
}
