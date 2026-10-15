// Solution for issue #1292
// Generated automatically by Baobot

Certainly! Below is a self-contained Node.js JavaScript solution script to address the issue of the "My record" lines appearing twice on the rewards screen in the `sky-academy` repository. This script is designed to be run directly as a Node.js script.


const GitHub = require('github');

const gh = new GitHub({
  token: process.env.GITHUB_TOKEN,
});

async function removeDuplicateMyRecordLines(owner, repo) {
  const repoInfo = await gh.repos.getRepo(owner, repo);
  const filePath = 'src/components/RewardsScreen.js';

  const content = await gh.repos.getContents(filePath, { owner, repo });

  const currentContent = await gh.repos.getContentsContent(content);

  // Check for the specific pattern
  const pattern = /"myRecord":\s*(\[.*?\]\s+)?\[[^\]]+\]/g;
  const found = pattern.test(currentContent);
  if (!found) {
    console.error(`No pattern found in the file: ${currentContent}`);
    return;
  }

  const newContent = currentContent.replace(pattern, '');

  if (newContent !== currentContent) {
    await gh.repos.createOrUpdateFileContents(
      owner,
      repo,
      filePath,
      newContent,
      {
        message: `Fix #1292 - Remove duplicate 'My record' lines`,
        branch: 'main', // Assuming you are working on the main branch
      },
    );
    console.log(`Successfully updated the file: ${filePath}`);
  } else {
    console.log(`No changes needed in the file: ${filePath}`);
  }
}

(async () => {
  const owner = 'ugurozsahin';
  const repo = 'sky-academy';
  await removeDuplicateMyRecordLines(owner, repo);
})();


### Instructions to Use the Script:

1. **Install the Required npm Package**:
   bash
   npm install github
   

2. **Set Environment Variable**:
   Ensure you have a GitHub personal access token with the `repo` scope. This token should be used to authorize the script. You can set this environment variable in your terminal:
   bash
   export GITHUB_TOKEN=your_personal_access_token_here
   

3. **Run the Script**:
   Simply run the script using Node.js.
   bash
   node fixRewardsScreen.js
   

### Notes:
- The script assumes that the pattern is only found in the `RewardsScreen.js` file. You might need to adjust the file path if the issue is located elsewhere.
- The script uses the GitHub API to read and update the contents of the file. Make sure you have the necessary permissions to read and write to the repository.
- The pattern used in the regex is a simple example. Depending on the actual content, you may need to adjust the regex pattern accordingly.

This script assumes that the issue is specific to the `RewardsScreen.js` file and that you are working on the main branch. Adjust as needed.