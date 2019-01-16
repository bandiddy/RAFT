USE travel_db;
CREATE TABLE location
(
    id int NOT NULL
    AUTO_INCREMENT,    
    country VARCHAR
    (20),
    climate VARCHAR
    (30),
    setting BOOLEAN,
    crowds BOOLEAN,
    food BOOLEAN,
    travler BOOLEAN,
    outdoor BOOLEAN,
    museums BOOLEAN,
    PRIMARY KEY
    (id)
);

    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("China", "Temperate", "true", "true", "true", "false", "false", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Japan", "Temperate", "true", "true", "true", "false", "false", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("USA", "Sunny", "true", "true", "false", "false", "true", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("France", "Brisk", "true", "true", "false", "false", "false", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("England", "Brisk", "true", "true", "false", "false", "false", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Italy", "Sunny", "true", "true", "false", "false", "false", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("New Zealand", "Brisk", "true", "false", "false", "true", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Thailand", "Tropical", "true", "false", "true", "true", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("UAE", "Sunny", "true", "true", "true", "true", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Spain", "Sunny", "true", "true", "false", "false", "false", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Argentina", "Tropical", "true", "true", "false", "true", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Brazil", "Sunny", "true", "true", "false", "true", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Greece", "Sunny", "false", "false", "false", "false", "false", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Australia", "Temperate", "true", "true", "false", "false", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Hong Kong", "Temperate", "true", "true", "true", "false", "false", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Costa Rica", "Tropical", "false", "false", "true", "false", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Maldives", "Tropucal", "false", "false", "true", "false", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Ireland", "Snowy", "true", "true", "false", "false", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Egypt", "Sunny", "true", "true", "true", "true", "true", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("South Africa", "Temperate", "true", "false", "true", "true", "true", "false");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Germany", "Brisk", "true", "true", "false", "false", "true", "true");
    INSERT INTO location
        (country, climate, setting, crowds, food, travler, outdoor, museums)
    VALUES
        ("Norway", "Snowy", "true", "true", "false", "true", "true", "false");