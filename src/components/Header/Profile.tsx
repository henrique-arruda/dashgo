import { Box, Text, Flex, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
                    { showProfileData && (
                        <Box mr="4" textAlign="right">
                        <Text>Henrique Arruda</Text>
                        <Text color="pink.400" fontSize="small">
                            henrique.dropt@gmail.com</Text>
                        </Box>
                    )}

                    <Avatar size="md" name="Henrique Arruda" src="https://github.com/henrique-arruda.png"/>
                </Flex>
    );
}