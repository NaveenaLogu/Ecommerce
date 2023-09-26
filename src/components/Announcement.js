import styled from "styled-components";

const Container=styled('div')({
    height:30,
    backgroundColor:'teal',
    color:'white',
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    fontSize:14,
    fontWeight:500
})

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;