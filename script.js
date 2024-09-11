const prompts = [
    {
        category: "Educate",
        prompt: "Share a post or video about a lesson you learned the hard way.",
        example: "Example: I once missed a deadline for a sponsor. Now I use this Notion template to be organized."
    },
    {
        category: "Educate",
        prompt: "Explain a common misconception in your space.",
        example: "Example: You don't need a $500 DSLR camera to make YouTube videos. Here's why."
    },
    {
        category: "Educate",
        prompt: "Talk about a skill that's a game changer in your space.",
        example: "Example: Here's 3 tips on cross hair positioning so you can click heads in Valorant."
    },
    {
        category: "Educate",
        prompt: "Share what you learned from a personal experience.",
        example: "Example: Last year I went to Japan, and here are 5 cafes you absolutely should visit."
    },
    {
        category: "Educate",
        prompt: "Share a resource that you use regularly.",
        example: "Example: If you want to make YouTube thumbnails easily, check out Canva."
    },
    {
        category: "Educate",
        prompt: "Share a tool that improved your quality of life.",
        example: "Example: I can't imagine making stickers for my small business without my Cricut machine."
    },
    {
        category: "Educate",
        prompt: "Offer a step-by-step guide to solving a common problem in your space.",
        example: "Example: If you're new to streaming, follow my 5 minute guide to optimize your settings."
    },
    {
        category: "Entertain",
        prompt: "Create a funny meme related to your space.",
        example: "Example: How it feels playing a tank in Overwatch 2: *hindered* *slept* *stunned* *discord*"
    },
    {
        category: "Entertain",
        prompt: "Share your hot take on a trending or current topic.",
        example: "Example: Some people are saying TikTok NPC lives are cringe, I say get that bag."
    },
    {
        category: "Entertain",
        prompt: "Share a behind-the-scenes look at your creative process.",
        example: "Example: Wonder how I make new choreo? Here's a look at my chaotic life in the dance studio."
    },
    {
        category: "Entertain",
        prompt: "Create a playful challenge or contest for your followers.",
        example: "Example: Giving away merch to my followers today! Best caption for this image wins."
    },
    {
        category: "Entertain",
        prompt: "Share a funny mishap or blooper from your creative work.",
        example: "Example: This is why I close the door when recording pottery videos *shows picture of cat with mess*"
    },
    {
        category: "Entertain",
        prompt: "Tell a story of a big fail that you had.",
        example: "Example: So I recorded a 20 minute vlog today only to realize the mic was off the entire time.."
    },
    {
        category: "Entertain",
        prompt: "Tell a story of something amazing that happened to you.",
        example: "Example: My local mail office was a life saver, a customer package broke apart and they offered to fix it."
    },
    {
        category: "Encourage",
        prompt: "Talk about what got you into your creative work.",
        example: "Example: I told myself I wanted to try ramen in every country, now I travel the world doing it."
    },
    {
        category: "Encourage",
        prompt: "Share a before/after of how much you improved.",
        example: "Example: This is what my drawings looked like in 2013, and here's a redo in 2023. Don't stop trying."
    },
    {
        category: "Encourage",
        prompt: "Share a milestone and express gratitude for your audience.",
        example: "Example: 1,000 subs! I can't believe we're here and I couldn't have done it without you guys."
    },
    {
        category: "Encourage",
        prompt: "Offer words of encouragement for someone just starting out.",
        example: "Example: Don't overthink how to start your art shop. Starting and learning from experience is the move."
    },
    {
        category: "Encourage",
        prompt: "Share a personal triumph or achievement and how you reached it.",
        example: "Example: Finally hit Twitch partner status last night! If you're wanting to do the same, here's some advice.."
    },
    {
        category: "Encourage",
        prompt: "Reassure and inspire someone new in your space.",
        example: "Example: Don't worry if your TikToks don't get much views, it took me a year to go viral. But it can be done."
    },
    {
        category: "Encourage",
        prompt: "Engage with your audience by offering them some support.",
        example: "Example: Interested in doing photography? Ask me anything in my livestream today, here to answer questions."
    },
    {
        category: "Empathize",
        prompt: "Share a personal reflection that others might find relatable.",
        example: "Example: Reflecting on my first live stream, I remember being nervous in front of the camera."
    },
    {
        category: "Empathize",
        prompt: "Tell a story about a vulnerable moment you had.",
        example: "Example: I once tried a new technique for my art. It made me feel anxious, but my community was supportive."
    },
    {
        category: "Empathize",
        prompt: "Talk about what you're strugging with right now.",
        example: "Example: I've been struggling with imposter syndrome lately, feeling like my videos aren't good enough."
    },
    {
        category: "Empathize",
        prompt: "Share something others in your space don't talk about enough.",
        example: "Example: Let's talk about the importance of mental health in the streaming community."
    },
    {
        category: "Empathize",
        prompt: "Share an unexpected lesson you learned from your creative journey.",
        example: "Example: When it comes to making art, you strive for perfection at first but it's really more about passion."
    },
    {
        category: "Empathize",
        prompt: "Discuss a common misconception about your space and your perspective on it.",
        example: "Example: The stereotype that YouTubers have 'easy' jobs overlooks the hard work behind each video."
    },
    {
        category: "Empathize",
        prompt: "Reflect on how your creative expression has evolved and what it means to you.",
        example: "Example: I used to only cosplay all the popular characters to \"keep up\" but now I enjoy my niche cosplays."
    }
];

let lastPrompt = null;

document.getElementById('generate-button').addEventListener('click', function() {
    let chosenPrompt;
    do {
        chosenPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (chosenPrompt === lastPrompt);

    lastPrompt = chosenPrompt;
    

    // Show the prompt display and include the category
    // Added an extra line break between the category and the prompt
    const promptDisplay = document.getElementById('prompt-display');
    promptDisplay.style.display = 'block';
    promptDisplay.innerHTML = `<strong>${chosenPrompt.category}</strong><br><br>${chosenPrompt.prompt}<div class="divider"></div>${chosenPrompt.example}`;

});
