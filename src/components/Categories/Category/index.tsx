import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CategoryProps {
  icon: string;
  text: string;
}

export function Category({ icon, text }: CategoryProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex flex={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="8" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Flex>
        <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}
