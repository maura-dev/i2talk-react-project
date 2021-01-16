import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
//import Button1 from './dashboardComponents/button1'
import Button2 from './dashboardComponents/button2';
class Isearch extends Component {
  render() {

    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
          <div className="dashboard-feature-container" id="user-iSearch-page">
            <Headers 
              text="iSearch"
              img = {null} 
              display = "hide"
              leave = {null} 
              view = {null}
              mute = {null} 
              search = {null}
              report = {null} 
            />
            
            <p id="iSearch-header">Search for Users by Location or Username</p>
            <Formik

              initialValues={{ location: '' }}
              
              validationSchema = {Yup.object({
                remindNote: Yup
                  .string()
                  .required('Please enter your location!'),
              })}

              onSubmit={
                (values, { resetForm }) => {
                  var axios = require('axios');
                  const data = values.location;

                  var config = {
                    method: 'post',
                    url: 'https://i2talk.live/api/isearch/location',
                    headers: { },
                    data : data
                  };

                  axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                  resetForm();
                }
              }
              >

              {({ isSubmitting }) => (
                <Form>
                  
                  {/* <input className="searchInput isearch-input" type="text" placeholder="Type location here e.g Lagos" required /> */}
                  <Field as="text" name="location" placeholder="Type location here e.g Lagos"/>
                  <ErrorMessage name="location" component="p" />
                  
                  <div className="isearch-btns">
                    <Button2 text="Search By Location" />
                    <Button2 text="Search By Username" /> 
                    <Button2 text="Search Nearby Users" />
                  </div>
                </Form>
              )}

            </Formik>

            <div className="scrollbar" id="iSearch-result"></div>
          </div>
        </div>
      </div>
    )
  }
}


export default Isearch;