try {
  const context = require('@apollo/client/react/context');
  console.log('Context exports:', Object.keys(context));
} catch (e) {
  console.log('Error loading context:', e.message);
}

try {
  const hooks = require('@apollo/client/react/hooks');
  console.log('Hooks exports:', Object.keys(hooks));
} catch (e) {
  console.log('Error loading hooks:', e.message);
}

try {
  const react = require('@apollo/client/react');
  console.log('React exports:', Object.keys(react));
} catch (e) {
  console.log('Error loading react:', e.message);
}