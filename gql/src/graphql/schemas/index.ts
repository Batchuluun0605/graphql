import { mergeTypeDefs } from "@graphql-tools/merge";
import { helloEmployeeDetailsSchema } from "./UserSchema";

export const typeDefs = mergeTypeDefs([helloEmployeeDetailsSchema]);
