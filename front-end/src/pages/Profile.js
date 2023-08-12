import React, { useState } from "react";
import Header from "../components/Header";
import { headerData } from "../utils/constants/headerData";
import ProfileNav from "../components/ProfileNav";
import ResourceCentre from "../components/ResourceCentre";
import profileStyle from "./Profile.module.css";
import { Text } from "@chakra-ui/react";
import ScheduleSession from "../components/ScheduleSession";
import GroupTherapy from "../components/GroupTherapy";
import PersonalDiary from "../components/PersonalDiary";
import MyProfile from "../components/MyProfile";

const Profile = () => {
  const [compToLoad, setCompToLoad] = useState("resourceCentre");
  return (
    <>
      <Header data={headerData} />
      <ProfileNav setCompToLoad={setCompToLoad}>
        {compToLoad === "resourceCentre" && <ResourceCentre />}
        {compToLoad === "scheduleSession" && <ScheduleSession />}
        {compToLoad === "groupTherapy" && <GroupTherapy />}
        {compToLoad === "personalDiary" && <PersonalDiary />}
        {compToLoad === "myProfile" && <MyProfile />}
      </ProfileNav>
    </>
  );
};

export default Profile;
