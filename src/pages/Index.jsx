import React from "react";
import { Box, Heading, Text, Image, Stack, Button, Grid, Link } from "@chakra-ui/react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a great product that you should buy!",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTE3NTg5MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Another amazing product that you can't miss out on!",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTE3NTg5MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This product will change your life!",
      price: "$99.99",
      image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTE3NTg5MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
  ];

  return (
    <Box>
      <Box bg="blue.500" color="white" py={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Affiliate Marketing Website
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Discover amazing products and earn commissions!
        </Text>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} p={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} borderRadius="lg" />
            <Heading as="h2" size="lg" mt={4}>
              {product.name}
            </Heading>
            <Text mt={2}>{product.description}</Text>
            <Stack direction="row" align="center" mt={4}>
              <Text fontWeight="bold">{product.price}</Text>
              <Box ml={2}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} color="yellow.500" />
                ))}
              </Box>
            </Stack>
            <Button leftIcon={<FaShoppingCart />} colorScheme="blue" mt={4} as={Link} href={product.link} isExternal>
              Buy Now
            </Button>
          </Box>
        ))}
      </Grid>

      <Box bg="gray.100" py={8}>
        <Heading as="h2" size="xl" textAlign="center">
          Why Choose Us?
        </Heading>
        <Stack direction="row" spacing={8} justify="center" mt={8}>
          <Box textAlign="center">
            <FaStar size={48} color="yellow.500" />
            <Text mt={2} fontWeight="bold">
              High-Quality Products
            </Text>
          </Box>
          <Box textAlign="center">
            <FaShoppingCart size={48} color="blue.500" />
            <Text mt={2} fontWeight="bold">
              Easy Purchasing
            </Text>
          </Box>
          <Box textAlign="center">
            <FaStar size={48} color="yellow.500" />
            <Text mt={2} fontWeight="bold">
              Competitive Commissions
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
