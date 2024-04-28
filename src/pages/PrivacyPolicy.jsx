import { Box, Text } from '@chakra-ui/react';

const PrivacyPolicy = () => (
  <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
    <Text fontSize="2xl" fontWeight="bold">Privacy Policy</Text>
    <Text mt={4}>
      This is the Privacy Policy for the Todo App. We respect your privacy and are committed to protecting it through our compliance with this policy.
    </Text>
  </Box>
);

export default PrivacyPolicy;