-- Create the Users table
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique user ID
    name TEXT NOT NULL,                   -- User's name
    email TEXT UNIQUE NOT NULL,           -- User's email (must be unique)
    profile_pic TEXT                      -- URL of the user's profile picture (optional)
);

-- Create the Posts table
CREATE TABLE Posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique post ID
    user_id INTEGER NOT NULL,             -- ID of the user who created the post (foreign key)
    content TEXT NOT NULL,                -- Text content of the post
    photo_url TEXT,                       -- URL of the photo associated with the post
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Timestamp of when the post was created
    FOREIGN KEY (user_id) REFERENCES Users(id)     -- Foreign key constraint to link to Users table
);
