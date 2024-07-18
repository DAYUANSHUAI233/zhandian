const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const apiUrl = 'https://api.duishu.com/dxwapp/lhb/fpb?pagecount=-1&filter_type=4&activity_show_type=0&KEY_ACTIVITY_TAB_PV=%2Ffupan&page=1&sub_filter_type=3&apiversion=8.9';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // 允许所有来源
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // 允许所有来源
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
