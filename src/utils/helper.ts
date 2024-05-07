export const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case 'fire':
      return {borderColor: '#FF5733', emoji: '🔥'};
      break;
    case 'water':
      return {borderColor: '#6493EA', emoji: '💧'};
      break;
    case 'grass':
      return {borderColor: '#66CC66', emoji: '🍀'};
      break;
    case 'electric':
      return {borderColor: '#FFD700', emoji: '⚡️'};
      break;
    default:
      return {borderColor: '#A0A0A0', emoji: '❓'};
  }
};
