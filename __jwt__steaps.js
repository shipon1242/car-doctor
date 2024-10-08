/***
 * install jsonwebtoken+require
 * jwt.sign(payload,secret,{expiresIn:})
 * token client
 * 
 
 */

/**
 * how to store token in the client side
 * 1.memory
 * 2. local storage --> ok type(xss)
 * 3.cookies:http only
 * 
 * 1.set cookies with http only.for development secure:false
 * 2.cors 
 * app.use(cors({origin:['http://localhost:5173/login'],
    credentials:true
}
))
 * 
 * 3. client side axios setting
 * in axios set credential:true
 * 
 * 
 * */
/**
 * 1.to send cookies the client make sure you are added credential:true for the api call using axios
 * 
 * 2.using cookie parser as middleware
 *  */

/** ________________________
 * 
 * MAKE API SECURE
 * _________________________
 * The person who should have
 * 
 * concept:
 * 1.assign two token for each person(access token,refresh token)
 * 2.access token contains: user identification(email,role, etc) .valid for a shorter duration
 * 3. refresh token is used :to recreate an access token that was expired
 * 4. if refresh token is invalid then logout the user
 * 5.
 * 
 * 
 * */
/**
 * 
 * */ 