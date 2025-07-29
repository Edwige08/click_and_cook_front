export interface User {
    username: string;
}

export interface UserDetail {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    username: string,
}

export interface Follows {
    followed_user_detail: UserDetail,
    following_user_detail: UserDetail,
    following_user: number,
}

export interface Step {
    description: string;
}

export interface Ingredients {
    title: string;
    quantity: number;
    unity: string;
}

export interface Recipes {
    id: number;
    title: string;
    cook_time_min: number;
    prep_time_min: number;
    servings: number;
    ingredients: Ingredients[];
    steps: Step[];
    picture: string;
    likes_count: number;
    is_liked: number;
    user: number;
    user_detail: User[];
    created_at: string;
}

export interface Recipe {
    id: number;
    title: string;
    cook_time_min: number;
    prep_time_min: number;
    servings: number;
    ingredients: Ingredients[];
    steps: Step[];
    picture: string;
    likes_count: number;
    is_liked: number;
    user: number;
    user_detail: UserDetail;
    created_at: string;
}