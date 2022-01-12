import { Flex, Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function ContinentCities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City city="city1" capital="Londres" país="Reino Unido" flag="flag1" />
        <City city="city2" capital="Paris" país="França" flag="flag2" />
        <City city="city3" capital="Roma" país="Itália" flag="flag3" />
        <City
          city="city4"
          capital="Praga"
          país="República Tcheca"
          flag="flag4"
        />
        <City city="city5" capital="Amsterdã" país="Holanda" flag="flag5" />
      </Grid>
    </>
  );
}
