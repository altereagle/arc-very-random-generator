module.exports = ({incoming = {}}) => {
  // Extracts the path from the incoming information
  const { path } = incoming;

  // If the path is null, return help
  if(path === null) {
    return `I can generate a hash, number, or name if you use the right path.`;
  }

  // If the path asks for a random hash, send one!
  if(path === `hash`) {
    const generateHash = () => {
      const possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
      let text = ``;

      for (let i = 0; i < possible.length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    };

    return generateHash();
  }

  // If the path asks for a random number, send one!
  if(path === `number`)  {
    return Math.round(Math.random() * 999999999999999);
  }

  // If the path asks for a random name, send one!
  if(path === `name`) {
    const generateName = () => {
      const firstNames = [
        `Bill `, `Larry `, `Joe `, `Susan `, `Chase `, `Chloe `,
        `Jack `, `Kenny `, `Walt `, `Jane `, `Lulu `
      ];
      const lastNames  = [
        `Watson`, `Smith`, `Johnson`, `O'Doyle`, `Dolittle`, `McMann`
      ];

      return firstNames[Math.floor(Math.random() * firstNames.length)] + lastNames[Math.floor(Math.random() * lastNames.length)];
    };

    return generateName();
  }

  // If the path asks for a random ip, send one!
  if(path === `ip`) {
    return `${Math.ceil(Math.random() * 255)}.${Math.ceil(Math.random() * 255)}.${Math.ceil(Math.random() * 255)}.${Math.ceil(Math.random() * 255)}`;
  }

  return `Somehow this got through, this is bad!`;
};