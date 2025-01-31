function myFunction(e) {
    Logger.log(JSON.stringify(e));
    //var markdown = generateMarkdown(formData);
    //var notionPageUrl = pushNotion(markdown);
    
    //pushDiscord(markdown, notionPageUrl);
  }
  
  function generateMarkdown(formData) {
    // Convert form data to Markdown format
    var markdown = "";
    // Example: markdown += `### Request Title\n${formData[0]}\n\n`;
    // Repeat for other form fields
    return markdown;
  }
  
  function pushNotion(markdown) {
    var notionToken = 'YOUR_NOTION_TOKEN';
    var databaseId = 'YOUR_DATABASE_ID';
    
    var payload = {
      // Construct your payload according to the Notion API specifications
      // Include the markdown in the page content
    };
  
    var options = {
      'method' : 'post',
      'contentType': 'application/json',
      'headers': {
        'Authorization': 'Bearer ' + notionToken,
        'Notion-Version': '2021-08-16'
      },
      'payload' : JSON.stringify(payload)
    };
  
    var response = UrlFetchApp.fetch('https://api.notion.com/v1/pages', options);
    var responseJson = JSON.parse(response.getContentText());
    
    // Extract the URL of the new Notion page and return it
    return responseJson.url;
  }
  
  function pushDiscord(markdown, notionPageUrl) {
    var discordWebhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';
    var payload = {
      'content': `New Request:\n${markdown}\nNotion Page: ${notionPageUrl}`
    };
  
    var options = {
      'method' : 'post',
      'contentType': 'application/json',
      'payload' : JSON.stringify(payload)
    };
  
    UrlFetchApp.fetch(discordWebhookUrl, options);
  }
  