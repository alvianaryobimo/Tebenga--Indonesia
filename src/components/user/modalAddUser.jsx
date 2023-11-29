import "./index.css";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaCamera } from "react-icons/fa6";
import { Button, Modal, Flex, Typography, Upload, Input, Radio, Select, TimePicker, Checkbox } from "antd";

const AddUser = () => {
	const { Title } = Typography;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const uploadButton = (
		<div
			style={{
				display: "block",
				background: "#E8F2FF",
				color: "#1D8AF5",
			}}
		>
			<FaCamera style={{ fontSize: "20px" }} />
			<div
				style={{
					marginTop: 5,
					display: "block",
					background: "#E8F2FF",
					color: "#1D8AF5",
				}}
			>
				Upload
			</div>
		</div>
	);
	const [value, setValue] = useState(1);
	const onChange = (e) => {
		console.log("radio checked", e.target.value);
		setValue(e.target.value);
	};
	const checked = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	return (
		<>
			<Button
				style={{
					background: "#E8F2FF",
					color: "#1D8AF5",
					fontWeight: "bold",
					display: "flex",
					alignItems: "center",
				}}
				type="primary"
				onClick={showModal}
			>
				<IoMdAdd style={{ marginRight: "5px", fontSize: "23px" }} />
				Add new user
			</Button>
			<Modal title="Add New User" open={isModalOpen} onOk={handleOk} okText="Add New User" onCancel={handleCancel}>
				<div style={{ display: "block" }}>
					<Flex style={{ justifyContent: "center" }}>
						<div style={{ display: "block" }}>
							<Title style={{ textAlign: "center", fontSize: "12px", fontWeight: "normal" }}>Profile Photo</Title>
							<Upload
								style={{ background: "#E8F2FF" }}
								name="avatar"
								listType="picture-circle"
								className="avatar-uploader"
								showUploadList={false}
							>
								{uploadButton}
							</Upload>
						</div>
					</Flex>
					<Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
						<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Full Name</Title>
						<Input placeholder="Enter full name" style={{ width: "100%"}} />
					</Flex>
					<Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
						<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Gender</Title>
						<Radio.Group onChange={onChange} value={value}>
							<Radio value={1}>Female</Radio>
							<Radio value={2}>Male</Radio>
						</Radio.Group>
					</Flex>
					<Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
						<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Mobile Number</Title>
						<Input
							style={{
								width: "12%",
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,
							}}
							defaultValue="+62"
						/>
						<Input
							style={{
								width: "88%",
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
							}}
							placeholder="81XXX"
						/>
					</Flex>
					<Flex style={{ marginLeft: "12px", marginTop: "16px", justifyContent: "center" }}>
						<Flex style={{ display: "block", marginRight: "10px" }}>
							<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Emergency Contact (Optional)</Title>
							<Input
								style={{
									width: 50,
									borderTopRightRadius: 0,
									borderBottomRightRadius: 0,
								}}
								defaultValue="+62"
							/>
							<Input
								style={{
									width: 120,
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
								}}
								placeholder="81XXX"
							/>
						</Flex>
						<Flex style={{ display: "block", marginRight: "10px" }}>
							<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Relationship</Title>
							<Select
								defaultValue="Single"
								style={{
									width: 135,
								}}
								options={[
									{
										value: "Single",
										label: "Single",
									},
									{
										value: "Taken",
										label: "Taken",
									},
								]}
							/>
						</Flex>
						<Flex style={{ display: "block" }}>
							<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Name</Title>
							<Input placeholder="Enter name" style={{ width: 135 }} />
						</Flex>
					</Flex>
					<Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
						<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Email (Optional)</Title>
						<Input placeholder="Enter email" style={{ width: "100%" }} />
					</Flex>
					<Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
						<Title style={{ fontSize: "14px", fontWeight: "bold" }}>Work Details</Title>
					</Flex>
					<Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
						<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Work Address</Title>
						<Input placeholder="Search home address" style={{ width: "100%" }} />
					</Flex>
					<Flex style={{ justifyContent: "center", marginLeft: "12px" }}>
						<Flex style={{ display: "block", marginTop: "16px" }}>
							<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Arival Time</Title>
							<TimePicker style={{ width: "225px" }} />
							<Checkbox onChange={onChange} style={{ marginTop: "5px" }}>
								Anytime
							</Checkbox>
						</Flex>
						<Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
							<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Depart Time</Title>
							<TimePicker style={{ width: "225px" }} />
							<Checkbox onChange={checked} style={{ marginTop: "5px" }}>
								Anytime
							</Checkbox>
						</Flex>
					</Flex>
                    <Flex style={{ marginLeft: "12px", display: "block", marginTop: "16px" }}>
						<Title style={{ fontSize: "12px", fontWeight: "normal" }}>Home Address Notes (Optional)</Title>
						<Input placeholder="Enter email" style={{ width: "100%" }} />
					</Flex>
				</div>
			</Modal>
		</>
	);
};
export default AddUser;
