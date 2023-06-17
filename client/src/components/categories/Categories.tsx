import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  TabIndicator,
} from "@chakra-ui/react";

const Categories = () => {
  return (
    <div className="News">
      <Tabs align="center" variant="soft-rounded">
        <TabList paddingTop={"10px"} paddingBottom={"10px"}>
          <Tab _selected={{ color: "white", bg: "brand.300" }}>All</Tab>
          <Tab _selected={{ color: "white", bg: "brand.300" }}>India</Tab>
          <Tab _selected={{ color: "white", bg: "brand.300" }}>World</Tab>
          <Tab _selected={{ color: "white", bg: "brand.300" }}>Tech</Tab>
          <Tab _selected={{ color: "white", bg: "brand.300" }}>Sport</Tab>
          <Tab _selected={{ color: "white", bg: "brand.300" }}>
            Entertainment
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack>
              <p>one!</p>
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
          <TabPanel>
            <p>five!</p>
          </TabPanel>
          <TabPanel>
            <p>six!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Categories;
