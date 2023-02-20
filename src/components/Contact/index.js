import React, { useRef, useState } from "react";
import {
  Container,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
  Form,
  FormH1,
  FormButton,
} from "./ContactElements";
import emailjs from "@emailjs/browser";
import { Text } from "@chakra-ui/react";

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "service_lga7j19",
        "template_tdhr8jn",
        form.current,
        "RyAnXFYU-A4wbNUwp"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message Sent");
        },
        (error) => {
          console.log(error.text);
          alert("Error alert");
        }
      );
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form
              id="contact-form"
              ref={form}
              action="https://formspree.io/f/xbjeojdv"
              method="post"
              onSubmit={sendEmail}
            >
              <FormH1>Contact Me..</FormH1>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput
                type="text"
                required
                name="name"
                noValidate
                placeholder="Enter Your Full Name"
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                required
                type="email"
                name="email"
                noValidate
                placeholder="Enter Your E-Mail"
              />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput
                type="text"
                name="message"
                noValidate
                required
                placeholder="Enter your Message"
              />
              <FormButton type="submit" value="submit">
                SEND
              </FormButton>
              <Text as="b">{done && "Thanks for Contact me !"}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
