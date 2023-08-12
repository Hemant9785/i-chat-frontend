import React from "react";
import { Avatar, Badge } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
let weblink;
const UserBadgeList = ({ user, handleFunction }) => {
  return (
    <>
      <Avatar src={user.picture} />
      <Badge ml="1" colorScheme="green">
        <CloseIcon onClick={handleFunction} />
      </Badge>
    </>
  );
};

export default UserBadgeList;
