import openai from "../Utils/chatGpt.configuration.js";

export const chatGptController = async (req, res) => {
    const { query } = req.body
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system", 
                    content: "You are a assistent and your job is to rephrase the text and make it formal just like wordtune i am sending you a query okay and also fix the grammer and make it more professional and this data what ever you will send me i will use it in my project so please make it more professional and make it more formal and make it more like wordtune and in response just give what user is asking dont send extra word message like here is your or you have to just give me answer to show this will go in my frontend via api request",
                },
                {"role": "user", "content": `${query}`}
            ],
        });

        const rephrasedText = response.choices[0].message.content.trim();
        res.status(200).json({ 
            success:true,
            data:rephrasedText 
        });
    } catch (error) {
        console.error('Error calling OpenAI:', error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

