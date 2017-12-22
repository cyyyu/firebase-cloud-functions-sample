'use strict'

const functions = require('firebase-functions')
const markdown = require('markdown').markdown

function mdtohtml(request, response) {
  const { body } = request
  const html = markdown.toHTML(body)
  response.send(html)
}

exports.mdtohtml = functions.https.onRequest(mdtohtml)
