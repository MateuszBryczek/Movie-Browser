import config from "../config";

export const getPeople = async () => {
    const { data } = await config.get("person/popular");

        if (!data.ok) {
            new Error(data.statusText);
        }

    return await {...data};
};