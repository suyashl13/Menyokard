import { Button } from "@chakra-ui/react";

export default function AdminLayout() {
  return (
    <Button onClick={async ()=>{
      await fetch('http://localhost:3000/api/v1/user', {
        credentials: 'include'
      });
    }}>
      Click
    </Button>
  )
}
