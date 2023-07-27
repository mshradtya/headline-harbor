import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import AllNews from "./AllNews";
import IndiaNews from "./IndiaNews";
import WorldNews from "./WorldNews";
import TechNews from "./TechNews";
import SportsNews from "./SportsNews";
import EntertainmentNews from "./EntertainmentNews";

const Categories = () => {
  return (
    <div className="News">
      <Tabs align="center" variant="soft-rounded">
        <TabList paddingTop={"10px"} paddingBottom={"10px"}>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.300",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            All
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.300",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            India
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.300",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            World
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.300",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Tech
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.300",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Sport
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "brand.300",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Entertainment
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AllNews />
          </TabPanel>
          <TabPanel>
            <IndiaNews />
          </TabPanel>
          <TabPanel>
            <WorldNews />
          </TabPanel>
          <TabPanel>
            <TechNews />
          </TabPanel>
          <TabPanel>
            <SportsNews />
          </TabPanel>
          <TabPanel>
            <EntertainmentNews />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Categories;
