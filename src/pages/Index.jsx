import { useState } from 'react';
import { Box, Button, Input, List, ListItem, ListIcon, IconButton, Link } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      const newTasks = [...tasks, { id: Date.now(), text: input, isComplete: false }];
      setTasks(newTasks);
      setInput('');
    }
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Box p={5}>
      <Input
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <IconButton
        icon={<FaPlus />}
        onClick={handleAddTask}
        colorScheme="blue"
        ml={2}
      />
      <List spacing={3} mt={4}>
        {tasks.map(task => (
          <ListItem key={task.id} d="flex" alignItems="center">
            <ListIcon
              as={task.isComplete ? FaCheckCircle : FaRegCircle}
              color={task.isComplete ? 'green.500' : 'gray.500'}
              onClick={() => handleToggleComplete(task.id)}
              cursor="pointer"
            />
            <Box flex="1" as="span" textDecoration={task.isComplete ? 'line-through' : 'none'}>
              {task.text}
            </Box>
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleDeleteTask(task.id)}
              colorScheme="red"
              size="sm"
              ml={2}
            />
          </ListItem>
        ))}
      </List>
    <Box as="footer" p={4} mt={10} bg="gray.100" textAlign="center">
      <Box>Copyright © 2023</Box>
      <Link href="/privacy-policy" color="blue.500">Privacy Policy</Link>
    </Box>
    </Box>
  );
};

export default Index;