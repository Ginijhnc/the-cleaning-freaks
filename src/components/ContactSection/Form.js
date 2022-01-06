import React, { useState } from 'react';
import Firebase from 'firebase';
import './form.css';
import ContactBackground from '../../media/ContactBackground.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, ContactBox, Right } from './Form.elements';
import { Title, Button } from '../../globalStyles';

const ContactForm = () => {
	const [formAsSent, setFormAsSent] = useState(false);

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					mail: '',
					phone: '',
					message: '',
				}}
				validate={values => {
					let errors = {};

					//  Name validation
					if (!values.name) {
						errors.name = 'Please enter a valid name.';
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
						errors.name = 'Your name can only contain letters and spaces.';
					}
					//  Email validation
					if (!values.mail) {
						errors.mail = 'Please enter a valid email.';
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							values.mail
						)
					) {
						errors.mail =
							'Your email address can only contain letters, numbers, dots, hyphens, and underscores.';
					}
					//   Phone validation
					if (!values.phone) {
						errors.phone = 'Please enter a phone number.';
					} else if (
						!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(
							values.phone
						)
						// Matches the following: 123-456-7890, (123) 456-7890, 123 456 7890, 123.456.7890, +91 (123) 456-7890
					) {
						errors.phone = 'Please enter a valid US phone number.';
					}
					//    Message validation
					if (!values.message) {
						errors.message = 'Please enter a message';
					} else if (!/.{40,}/.test(values.message)) {
						errors.message =
							'The message needs to have at least 40 characters.';
					}

					return errors;
				}}
				onSubmit={(values, { resetForm }) => {
					let ref1 = Firebase.database().ref().child('submissions').push();
					ref1.set(values);

					console.log(values);
					resetForm();
					setFormAsSent(true);
					// removes the "Thank you for contacting us!" text after 5 seconds
					setTimeout(() => setFormAsSent(false), 5000);
				}}
			>
				{({ errors }) => (
					<Container
						id='estimation'
						style={{
							backgroundImage: `url(${ContactBackground})`,
							backgroundSize: 'cover',
						}}
					>
						<ContactBox>
							<Right>
								<Title>Contact Us & Get a Free Estimation!</Title>
								<Form className='contact-form'>
									<div>
										<label htmlFor='name'>Your Name</label>
										<Field
											type='text'
											id='name'
											name='name'
											placeholder='John Doe'
										/>
										<ErrorMessage
											name='name'
											component={() => (
												<div className='error'>
													<h3>{errors.name}</h3>
												</div>
											)}
										/>
									</div>
									<div>
										<label htmlFor='mail'>Email</label>
										<Field
											type='text'
											id='mail'
											name='mail'
											placeholder='youremailaddress@gmail.com'
										/>
										<ErrorMessage
											name='mail'
											component={() => (
												<div className='error'>
													<h3>{errors.mail}</h3>
												</div>
											)}
										/>
									</div>
									<div>
										<label htmlFor='phone'>Phone Number</label>
										<Field
											type='tel'
											id='phone'
											name='phone'
											placeholder='(100) 123-4567'
										/>
										<ErrorMessage
											name='phone'
											component={() => (
												<div className='error'>
													<h3>{errors.phone}</h3>
												</div>
											)}
										/>
									</div>
									<div>
										<label htmlFor='message'>Message</label>
										<Field
											name='message'
											as='textarea'
											placeholder='Message'
											style={{
												maxWidth: '100%',
												minWidth: '100%',
												height: '100px',
												resize: 'none',
											}}
										/>
										<ErrorMessage
											name='message'
											component={() => (
												<div className='error'>
													<h3>{errors.message}</h3>
												</div>
											)}
										/>
									</div>
									<Button mediumSize>SUBMIT</Button>
									{formAsSent && (
										<h1 className='success'>
											Thank you for contacting us! We will be in touch with you
											shortly.
										</h1>
									)}
								</Form>
							</Right>
						</ContactBox>
					</Container>
				)}
			</Formik>
		</>
	);
};

export default ContactForm;
