import chalk from "chalk";
import { v4 as uuid} from "uuid";
console.log(chalk.blue("Hello"));
const uniqId = uuid();
console.log(uniqId);