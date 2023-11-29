import "./index.css";
import React from "react";
import { TiFilter } from "react-icons/ti";
import { UserOutlined } from "@ant-design/icons";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Table, Flex, Typography, Tag, Avatar, Button } from "antd";

const { Title } = Typography;
const columns = [
	{
		title: (
			<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
				ID
				<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
					<TiFilter />
				</div>
			</div>
		),
		dataIndex: "id",
		width: "180px",
	},
	{
		title: (
			<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
				Status
				<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
					<TiFilter />
				</div>
			</div>
		),
		dataIndex: "status",
		width: "180px",
	},
	{
		title: (
			<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
				Name
				<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
					<TiFilter />
				</div>
			</div>
		),
		dataIndex: "name",
		width: "180px",
	},
	{
		title: (
			<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
				Contact
				<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
					<TiFilter />
				</div>
			</div>
		),
		dataIndex: "contact",
		width: "185px",
	},
	{
		title: (
			<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
				Address
				<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
					<TiFilter />
				</div>
			</div>
		),
		dataIndex: "address",
		width: "280px",
	},
	{
		title: <span style={{ fontSize: "14px", fontWeight: "bold" }}>Trip</span>,
		dataIndex: "trip",
		width: "130px",
	},
	{
		title: <span style={{ fontSize: "14px", fontWeight: "bold" }}>Voucher</span>,
		dataIndex: "voucher",
		width: "170px",
	},
	{
		title: <span style={{ fontSize: "14px", fontWeight: "bold" }}>Action</span>,
		dataIndex: "action",
		width: "170px",
	},
];

const data = [
	{
		key: "1",
		id: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>User Id</Title>
					<Title style={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: 0 }}>457</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Employee Id</Title>
					<Title style={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: 0 }}>BAS-51243</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "20px" }}>
						<HiComputerDesktop />
					</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Date created 9 Jun 2022</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>First app login on 22 Nov 2022</Title>
				</Flex>
			</Flex>
		),
		status: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Tag color="processing" style={{ borderRadius: "16px", marginBottom: "5px" }}>
					Lead
				</Tag>
				<Flex>-</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Last Booking</Title>
				</Flex>
				<Flex>-</Flex>
			</Flex>
		),
		name: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Flex>
					<Avatar size={64} icon={<UserOutlined />} />
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "black" }}>Ruben Tornado</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "15px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Male</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "15px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Company</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>SKTrans Tornado</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Department</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Processing</Title>
				</Flex>
			</Flex>
		),
		contact: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Mobile Number</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>+62 812 3546 7890</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
						Email
						<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
							<BsFillPatchCheckFill style={{ color: "#07A85B" }} />
						</div>
					</div>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>rubentornado@email.com </Title>
				</Flex>
			</Flex>
		),
		address: (
			<Flex>
				<Flex style={{ display: "block", maxWidth: "2000px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Home</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Master Pro</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Serpong, Kota Tanggerang Selatan
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 56 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
				<Flex style={{ display: "block", maxWidth: "120px", marginLeft: "10px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Work</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Grand Indonesia</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Menteng, Kota Jakarta Pusat
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 56 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
			</Flex>
		),
		action: (
			<Flex style={{ display: "block" }}>
				<Button style={{ fontWeight: "bold", width: "145px", marginBottom: "10px" }}>Edit</Button>
				<Button disabled style={{ fontWeight: "bold", border: "transparent", width: "145px", marginBottom: "10px" }}>
					Delete
				</Button>
				<Button danger style={{ fontWeight: "bold", width: "145px" }}>
					Suspend
				</Button>
			</Flex>
		),
	},
	{
		key: "2",
		id: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>User Id</Title>
					<Title style={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: 0 }}>457</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "20px" }}>
						<IoIosPhonePortrait />
					</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Date created 9 Jun 2022</Title>
				</Flex>
			</Flex>
		),
		status: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Tag color="success" style={{ borderRadius: "16px", marginBottom: "5px" }}>
					Active
				</Tag>
				<Title style={{ fontSize: "14px", color: "black" }}>1 day ago</Title>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Last Booking 2 May 2022</Title>
				</Flex>
				<Flex>-</Flex>
			</Flex>
		),
		name: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Flex>
					<Avatar size={64} icon={<UserOutlined />} />
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "black" }}>Kierra Calzoni</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "15px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Female</Title>
				</Flex>
			</Flex>
		),
		contact: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Mobile Number</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>+62 812 3546 7890</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
						Email
						<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
							<BsFillPatchCheckFill style={{ color: "#07A85B" }} />
						</div>
					</div>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>kierracalzoni@email.com </Title>
				</Flex>
			</Flex>
		),
		address: (
			<Flex>
				<Flex style={{ display: "block", maxWidth: "120px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Home</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Master Pro</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Serpong, Kota Tanggerang Selatan
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 40 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
				<Flex style={{ display: "block", maxWidth: "120px", marginLeft: "10px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Work</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Grand Indonesia</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Menteng, Kota Jakarta Pusat
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 40 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
			</Flex>
		),
		trip: (
			<Flex style={{ display: "block" }}>
				<Title style={{ fontSize: "14px", color: "black", marginTop: 0 }}>32 Total Trips</Title>
				<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
					<a href="https://www.google.com/maps">Wiew Details</a>
				</Title>
			</Flex>
		),
		voucher: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "black", marginTop: 0 }}>Flexi</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>Flexi Pass 5X • 5X</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 0 }}>Trips</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 0 }}>BSD {"<->"} SCBD</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 30 }}>Flexi Pass 3X • 3X</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 0 }}>Trips</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 0 }}>BSD {"<->"} SCBD</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "black", marginTop: 30 }}>Bundle</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 0 }}>Kemerdekaan</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 0 }}>BSD {"<->"} SCBD</Title>{" "}
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Details</a>
					</Title>
				</Flex>
			</Flex>
		),
	},
	{
		key: "3",
		id: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>User Id</Title>
					<Title style={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: 0 }}>457</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Employee Id</Title>
					<Title style={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: 0 }}>BAS-51243</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "20px" }}>
						<HiComputerDesktop />
					</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Date created 9 Jun 2022</Title>
				</Flex>
			</Flex>
		),
		status: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Tag color="default" style={{ borderRadius: "16px", marginBottom: "5px", border: "1px solid black" }}>
					Recent
				</Tag>
				<Title style={{ fontSize: "14px", color: "black" }}>56 days ago</Title>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Last Booking 2 May 2022</Title>
				</Flex>
			</Flex>
		),
		name: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Flex>
					<Avatar size={64} icon={<UserOutlined />} />
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "black" }}>Kristianto</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "15px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Male</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "15px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Company</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Toyota Tsusho</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Department</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Chemicals</Title>
				</Flex>
			</Flex>
		),
		contact: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Mobile Number</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>+62 812 3546 7890</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
						Email
						<div style={{ fontSize: "20px", color: "#747474", marginLeft: "5px", marginTop: "5px" }}>
							<BsFillPatchCheckFill style={{ color: "#07A85B" }} />
						</div>
					</div>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>kristianto@email.com </Title>
				</Flex>
			</Flex>
		),
		address: (
			<Flex>
				<Flex style={{ display: "block", maxWidth: "120px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Home</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Master Pro</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Serpong, Kota Tanggerang Selatan
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 40 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
				<Flex style={{ display: "block", maxWidth: "120px", marginLeft: "10px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Work</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Grand Indonesia</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Menteng, Kota Jakarta Pusat
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 40 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
			</Flex>
		),
    trip: (
			<Flex style={{ display: "block" }}>
				<Title style={{ fontSize: "14px", color: "black", marginTop: 0 }}>32 Total Trips</Title>
				<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
					<a href="https://www.google.com/maps">Wiew Details</a>
				</Title>
			</Flex>
		),
	},
	{
		key: "4",
		id: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>User Id</Title>
					<Title style={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: 0 }}>457</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Employee Id</Title>
					<Title style={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: 0 }}>BAS-51243</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "20px" }}>
						<HiComputerDesktop />
					</Title>
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Date created 9 Jun 2022</Title>
				</Flex>
			</Flex>
		),
		status: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Tag color="default" style={{ borderRadius: "16px", marginBottom: "5px" }}>
					Inactive
				</Tag>
				<Title style={{ fontSize: "14px", color: "black" }}>125 days ago</Title>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Last Booking 2 May 2022</Title>
				</Flex>
			</Flex>
		),
		name: (
			<Flex style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
				<Flex>
					<Avatar size={64} />
				</Flex>
				<Flex style={{ display: "block" }}>
					<Title style={{ fontSize: "14px", color: "black" }}>Waluyo Brahmono Paulo Margono</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "15px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Male</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "15px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Company</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Toyota Tsusho</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Department</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Processing</Title>
				</Flex>
			</Flex>
		),
		contact: (
			<Flex style={{ display: "block" }}>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Mobile Number</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>+62 812 3546 7890</Title>
				</Flex>
				<Flex style={{ display: "block", marginTop: "20px" }}>
					<div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
						Email
					</div>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>- </Title>
				</Flex>
			</Flex>
		),
		address: (
			<Flex>
				<Flex style={{ display: "block", maxWidth: "120px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Home</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Master Pro</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Serpong, Kota Tanggerang Selatan
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 40 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
				<Flex style={{ display: "block", maxWidth: "120px", marginLeft: "10px" }}>
					<Title style={{ fontSize: "14px", color: "#747474" }}>Work</Title>
					<Title style={{ fontSize: "14px", color: "black", margin: 0 }}>Grand Indonesia</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						Kecamatan Menteng, Kota Jakarta Pusat
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
						<a href="https://www.google.com/maps">Wiew Map</a>
					</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 40 }}>Depart at 08:00</Title>
					<Title style={{ fontSize: "14px", color: "#747474", marginTop: 2 }}>Arival at 19:00</Title>
				</Flex>
			</Flex>
		),
    trip: (
			<Flex style={{ display: "block" }}>
				<Title style={{ fontSize: "14px", color: "black", marginTop: 0 }}>1 Total Trips</Title>
				<Title style={{ fontSize: "14px", color: "#747474", marginTop: 5 }}>
					<a href="https://www.google.com/maps">Wiew Details</a>
				</Title>
			</Flex>
		),
	},
];

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === "Disabled User",
		name: record.name,
	}),
};

const List = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Table
				rowSelection={{
					...rowSelection,
				}}
				columns={columns}
				dataSource={data}
				style={{ width: "97%", marginTop: "20px" }}
			/>
		</div>
	);
};

export default List;
