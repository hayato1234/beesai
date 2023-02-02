import React from "react";
import { Button, Container, Form, Input, Label } from "reactstrap";

const Admin = () => {
  const isAdmin = true;
  if (!isAdmin) return <h1>Please login as an admin</h1>;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = event.currentTarget.body.value;
    const bearer = "Bearer " + localStorage.getItem("token");
    console.log(body);
    const res = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
      body: JSON.parse(JSON.stringify(body)),
    });

    // if (res.status === 200) {
    //   const jsonData = await res.json();
    //   if (jsonData.success) {
    //     localStorage.setItem("token", jsonData.token);
    //     // console.log(localStorage.getItem("token"));
    //   }
    // }
    console.log(res);
  };
  return (
    <Container style={{ height: "900px" }}>
      <Form onSubmit={handleSubmit}>
        <Label className="sr-only col-form-label" htmlFor="body">
          JSON Data
        </Label>
        <Input
          type="textarea"
          name="body"
          id="body"
          className="form-control form-control-sm"
          placeholder="{...}"
          required
        />
        <Button role="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Admin;
