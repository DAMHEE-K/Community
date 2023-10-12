package com.rest.study.common.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Data;

import java.security.Signature;
import java.util.Date;

@Data
public class JwtTokenUtil {
    public static String createToken(String loginId, String key, long expireTimeMs) {
        // 토근에 담을 정보(payload)를 담는 곳 (key-value의 한 쌍으로 이루어짐)
        // 토근의 발급자, 제목, 대상자, 만료시간 등 정보가 담겨있음
        Claims claims = Jwts.claims();
        claims.put("loginId", loginId); // 나중에 loginId 꺼낼 수 있음

        // issuedAt : 발급시간
        // expiration : 만료시간
        // signWith : 지정된 키와 알고리즘을 사용해 토큰에 서명
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireTimeMs))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
    }

    public static String getLoginId(String token, String secretKey) {
        return extractClaims(token, secretKey).get("loginId").toString();
    }

    public static boolean isExpired(String token, String secretKey) {
        Date expiredDate = extractClaims(token, secretKey).getExpiration();
        // Token 만료 날짜가 현재 시간보다 이전인지 여부
        return expiredDate.before(new Date());
    }

    // JWT : JWT는 클레임(claim) 정보를 포함한 JSON 객체로 이뤄진 토큰
    // JWS : JWS는 JWT의 서명 부분을 지칭하는 용어
    public static Claims extractClaims(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }
}
