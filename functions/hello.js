// domain/.nelity/functions/hello

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Hello World',
  };
};
