import React from "react";
import "./index.css";
import { CiSearch } from "react-icons/ci";
import { Flex, Typography, Button, Input } from "antd";
import AddUser from "./modalAddUser";
import List from "./list";

const UserList = () => {
	const { Title } = Typography;
	return (
		<>
			<Flex
				style={{
					width: "100%",
					height: "full",
					background: "#F6F6F6",
					justifyContent: "center",
					padding: "16px",
				}}
			>
				<Flex
					style={{
						width: "100%",
						height: "full",
						background: "white",
						borderRadius: "8px",
						display: "block",
					}}
				>
					<Flex
						style={{
							width: "100%",
							justifyContent: "space-between",
						}}
					>
						<Flex alignItems="center" style={{ padding: "20px" }}>
							<Flex style={{ marginRight: "20px" }}>
								<div className="divider" />
								<Flex style={{ display: "block" }}>
									<Title style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>456</Title>
									<Title style={{ fontSize: "14px", margin: 0 }}>Total users</Title>
								</Flex>
							</Flex>
							<Flex style={{ marginRight: "20px" }}>
								<div className="divider" />
								<Flex style={{ display: "block" }}>
									<Title style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>396</Title>
									<Title style={{ fontSize: "14px", margin: 0 }}>Active users</Title>
								</Flex>
							</Flex>
							<Flex style={{ marginRight: "20px" }}>
								<div className="divider" />
								<Flex style={{ display: "block" }}>
									<Title style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>123</Title>
									<Title style={{ fontSize: "14px", margin: 0 }}>Recent users</Title>
								</Flex>
							</Flex>
							<Flex style={{ marginRight: "20px" }}>
								<div className="divider" />
								<Flex style={{ display: "block" }}>
									<Title style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>60</Title>
									<Title style={{ fontSize: "14px", margin: 0 }}>Inactive users</Title>
								</Flex>
							</Flex>
							<Flex style={{ marginRight: "20px" }}>
								<div className="divider" />
								<Flex style={{ display: "block" }}>
									<Title style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>60</Title>
									<Title style={{ fontSize: "14px", margin: 0 }}>Lead users</Title>
								</Flex>
							</Flex>
						</Flex>
						<Flex alignItems="center" style={{ padding: "20px" }}>
							<AddUser />
						</Flex>
					</Flex>
					<Flex
						style={{
							width: "100%",
							justifyContent: "space-between",
						}}
					>
						<Flex style={{ paddingLeft: "20px" }}>
							<Input
								placeholder="Search ID, name, mobile number, email"
								style={{ width: "290px" }}
								suffix={<CiSearch />}
							/>
						</Flex>
						<Flex style={{ paddingRight: "20px" }}>
							<Button
								style={{
									fontWeight: "bold",
									display: "flex",
									alignItems: "center",
									borderColor: "transparent",
									marginRight: "10px",
									height: "35px"
								}}
								type="primary"
								disabled
							>
								Export
							</Button>
							<Button
								style={{
									fontWeight: "bold",
									display: "flex",
									color: "#1D8AF5",
									alignItems: "center",
									background: "#E8F2FF",
								}}
								type="primary"
							>
								Export All Data
							</Button>
						</Flex>
					</Flex>
					<List />
				</Flex>
			</Flex>
		</>
	);
};

export default UserList;
