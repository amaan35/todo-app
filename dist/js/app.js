"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)());
app.use(index_1.default);
mongoose_1.default.connect(`mongodb+srv://amaan:${process.env.MONGO_PASSWORD}@todocluster.dxhs107.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=todoCluster`).then(() => {
    console.log("MongoDB is connected");
}).catch((err) => {
    console.log(err);
});
app.get("/", (req, res) => {
    res.send("Server working successfully");
});
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});
