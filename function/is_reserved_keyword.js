function is_reserved_keyword(word_to_check)
{
    var reserved_word = false;
    
    if (/^[a-z]+$/.test(word_to_check))
    {
        try
        {
            eval('var '+word_to_check+' = 1');
        }
        catch (error)
        {
            reserved_word = true;
        }
    }
    
    return reserved_word;
}