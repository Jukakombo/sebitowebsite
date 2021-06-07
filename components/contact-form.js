import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import personImage from "@images/resources/contact-person-1-1.png";
import { db } from "../firebase";
import firebase from "firebase";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = handleSubmit((formData) => {
    // alert(JSON.stringify(formData));
    db.collection("messages").add({
      name: formData.name,
      phone: formData.phone,
      item: formData.item,
      subject: formData.subject,
      message: formData.message,
      quantity: formData.quantity,
      company: formData.company,
      address: formData.address,

      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    router.push("/success");
  });

  return (
    <section className="contact-one">
      <Container>
        <div className="inner-container">
          <Row className="align-items-end">
            <div className="col-sm-12 col-md-12 col-lg-5 text-center text-md-center text-lg-center text-xl-left">
              <img
                src={personImage}
                className="contact-one__person img-fluid wow fadeInLeft"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <form className="contact-one__form" onSubmit={onSubmit}>
                <h3>Contact Us</h3>
                <Row>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name "
                        {...register("name", {
                          required: true,
                          messsage: "Name is required",
                        })}
                      />

                      <i className="far fa-user"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Email ID"
                        {...register("emails", {
                          required: true,
                          messsage: "Email is required",
                        })}
                      />
                      <i className="far fa-envelope-open"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Phone No."
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Phone required",
                          },
                        })}
                      />

                      <i className="far fa-phone"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Address "
                        {...register("address", {
                          required: {
                            value: true,
                            messsage: "Address is required",
                          },
                        })}
                      />

                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Company"
                        {...register("company", {
                          required: {
                            value: true,
                            messsage: "Company is required",
                          },
                        })}
                      />

                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        {...register("subject", {
                          required: {
                            value: true,
                            messsage: "Subject is required",
                          },
                        })}
                      />

                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Item Description"
                        {...register("item", {
                          required: {
                            value: true,
                            messsage: "Item is required",
                          },
                        })}
                      />

                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Item Quantity "
                        {...register("quantity", {
                          required: {
                            value: true,
                            messsage: "Quantity is required",
                          },
                        })}
                      />

                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Type Your Message Here ........"
                        {...register("message", {
                          required: {
                            value: true,
                            message: "Please type your message here",
                          },
                          maxLength: {
                            value: 1000,
                            message:
                              "The message can not be more than 1000 characters",
                          },
                        })}
                      ></textarea>

                      <i className="far fa-comment"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <button type="submit" className="thm-btn">
                      Send Message
                      <i className="fa fa-arrow-circle-right"></i>
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
