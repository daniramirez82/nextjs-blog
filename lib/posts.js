// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import { remark } from 'remark'
// import html from 'remark-html'

// const postsDirectory = path.join(process.cwd(), 'posts-data');

// export function getSortedPostsData() {
//     //get file nmaes under /post-data
//     const fileNames = fs.readdirSync(postsDirectory);
//     const allPostsData = fileNames.map((fileName) => {
//         //remove the .md from file name to get id

//         const id = fileName.replace(/\.md$/, '');

//         //read markdown file as string

//         const fullPath = path.join(postsDirectory, fileName);
//         const fileContent = fs.readFileSync(fullPath, 'utf-8');

//         //use gray-matter to parse the post metadata section
//         const matterResult = matter(fileContent);

//         //combine the data with the id

//         return {
//             id,
//             ...matterResult.data,
//         };
//     });

//     //Sort posts by date

//     return allPostsData.sort(({ date: a }, { date: b }) => {
//         if (a < b) {
//             return 1;
//         } else if (a > b) {
//             return -1;
//         } else {
//             return 0;
//         }
//     });
// }

// export function getAllPostIds() {

//     const fileNames = fs.readdirSync(postsDirectory);

//     return fileNames.map((fileName) => {
//         return {
//             params: {
//                 id: fileName.replace(/\.md$/, ""),
//             },
//         };
//     });

// }

// export async function getPostData(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf-8');
//     const matterResult = matter(fileContents);

//     const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);

//     const contentHtml= processedContent.toString();

//     return {
//         id,
//         contentHtml,
//         ... matterResult,
//     } 
// }