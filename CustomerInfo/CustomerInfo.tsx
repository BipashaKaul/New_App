export type CustomerInfo = {
  id: Number;
  name: string;
  title: string;
  address: string;
};
const customers: CustomerInfo[] = [
  {
    id: 0,
    name: "Andrew Lee",
    title: "VP of Finance",
    address: "852 Pine St, Anyplace, USA",
  },
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    address: "456 Elm St, Anycity, USA",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "CFO",
    address: "789 Oak St, Anyvillage, USA",
  },
  {
    id: 4,
    name: "Bob Brown",
    title: "COO",
    address: "321 Pine St, Anyplace, USA",
  },
  {
    id: 5,
    name: "Emily Taylor",
    title: "CMO",
    address: "654 Cedar St, Anyborough, USA",
  },
  {
    id: 6,
    name: "Michael Wilson",
    title: "VP of Engineering",
    address: "987 Maple St, Anycity, USA",
  },
  {
    id: 7,
    name: "Sarah Garcia",
    title: "VP of Sales",
    address: "753 Birch St, Anytown, USA",
  },
  {
    id: 8,
    name: "David Martinez",
    title: "VP of Marketing",
    address: "159 Walnut St, Anyvillage, USA",
  },
  {
    id: 9,
    name: "Jessica Rodriguez",
    title: "VP of Operations",
    address: "357 Oak St, Anycity, USA",
  },
];

export default customers;
