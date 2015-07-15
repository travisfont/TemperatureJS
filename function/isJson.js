function IsJson(str)
{
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}