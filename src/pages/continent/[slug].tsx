import { Flex } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentCities } from "../../components/ContinentCities";
import { ContinentContent } from "../../components/ContinentContent";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />

      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContinentContent />

        <ContinentCities />
      </Flex>
    </Flex>
  );
}
