const testSelection = {
  title: 'Select a few (non-canary) things while testing',
  choose: 2,
  options: [
    {
      title: 'Option 1',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 1"
    },
    {
      title: 'Option 2',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 3',
      text: 'Lorem ipsum, dolores de muelas amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 3"
    },
    {
      title: 'Option 4',
      text: 'Lorem ipsum, dolor at cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 4"
    },
  ]
};

const secondTestSelection = {
  title: 'Select 3 things while testing',
  choose: 3,
  options: [
    {
      title: 'Option 1',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 1"
    },
    {
      title: 'Option 2',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 3',
      text: 'Lorem ipsum, dolores de muelas amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 3"
    },
    {
      title: 'Option 4',
      text: 'Lorem ipsum, dolor at cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 4"
    },
    {
      title: 'Option 5',
      text: 'Lorem ipsum, dolor at cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 4"
    },
    {
      title: 'Option 6',
      text: 'Lorem ipsum, dolor at cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 4"
    },
    {
      title: 'Option 7',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
  ]
};

const thirdTestSelection = {
  title: 'Select only one thing while testing',
  choose: 1,
  options: [
    {
      title: 'Option 1',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 1"
    },
    {
      title: 'Option 2',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 3',
      text: 'Lorem ipsum, dolores de muelas amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 3"
    },
    {
      title: 'Option 4',
      text: 'Lorem ipsum, dolor at cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 4"
    },
    {
      title: 'Option 5',
      text: 'Lorem ipsum, dolor at cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 4"
    },
    {
      title: 'Option 6',
      text: 'Lorem ipsum, dolor at cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 4"
    },
    {
      title: 'Option 7',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 8',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 9',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 10',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 11',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 12',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 13',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 14',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
    {
      title: 'Option 15',
      text: 'Lorem ipsum, dolores sit amet consectetur adipisicing elit. Maxime debitis quia aut velit asperiores sed rerum unde repellat odio sequi deserunt voluptate consectetur id libero, dolor voluptatem nostrum rem. Exercitationem quos ipsa velit, minus ipsum ratione consequuntur incidunt. Tempore laboriosam laborum ratione id placeat doloribus est ut ex velit, officia incidunt eius delectus non reiciendis sed explicabo aspernatur recusandae illum quasi sapiente quisquam? Impedit alias ipsa soluta dolores? Saepe quasi inventore quisquam pariatur repudiandae? Fugiat cumque excepturi ab quas veniam quis! Alias cupiditate, maiores ipsa neque laborum maxime distinctio, quidem repellat vitae consequatur, rerum qui aliquid! Iusto eaque omnis iste!',
      effects: "The effects of option 2"
    },
  ]
};


export const testSelections = [testSelection, secondTestSelection, thirdTestSelection];